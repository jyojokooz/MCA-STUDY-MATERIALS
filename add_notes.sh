#!/bin/bash

# MCA Website - Notes Addition Helper Script
# This script helps you add your original notes to the appropriate course directories

echo "=== MCA Website Notes Addition Helper ==="
echo ""

# Function to show available courses
show_courses() {
    echo "Available courses by semester:"
    echo ""
    echo "SEMESTER I:"
    echo "  20MCA101 - Mathematical Foundations for Computing"
    echo "  20MCA103 - Digital Fundamentals & Computer Architecture"
    echo "  20MCA105 - Advanced Data Structures"
    echo "  20MCA107 - Advanced Software Engineering"
    echo "  20MCA131 - Programming Lab"
    echo "  20MCA133 - Web Programming Lab"
    echo "  20MCA135 - Data Structures Lab"
    echo ""
    echo "SEMESTER II:"
    echo "  20MCA102 - Advanced Database Management Systems"
    echo "  20MCA104 - Advanced Computer Networks"
    echo "  20MCA1E1 - Elective 1"
    echo "  20MCA1E2 - Elective 2"
    echo "  20MCA132 - Object Oriented Programming Lab"
    echo "  20MCA134 - Advanced DBMS Lab"
    echo "  20MCA136 - Networking & System Administration Lab"
    echo ""
    echo "SEMESTER III:"
    echo "  20MCA201 - Data Science & Machine Learning"
    echo "  20MCA203 - Design & Analysis of Algorithms"
    echo "  20MCA2E3 - Elective 3"
    echo "  20MCA2E4 - Elective 4"
    echo "  20MCA241 - Data Science Lab"
    echo "  20MCA243 - Mobile Application Development Lab"
    echo "  20MCA245 - Mini Project"
    echo ""
    echo "SEMESTER IV:"
    echo "  20MCA242 - Comprehensive Viva"
    echo "  20MCA244 - Seminar"
    echo "  20MCA246 - Main Project"
    echo ""
}

# Function to get semester directory
get_semester_dir() {
    local course_code=$1
    case $course_code in
        20MCA101|20MCA103|20MCA105|20MCA107|20MCA131|20MCA133|20MCA135)
            echo "semester_i"
            ;;
        20MCA102|20MCA104|20MCA1E1|20MCA1E2|20MCA132|20MCA134|20MCA136)
            echo "semester_ii"
            ;;
        20MCA201|20MCA203|20MCA2E3|20MCA2E4|20MCA241|20MCA243|20MCA245)
            echo "semester_iii"
            ;;
        20MCA242|20MCA244|20MCA246)
            echo "semester_iv"
            ;;
        *)
            echo "unknown"
            ;;
    esac
}

# Function to add notes
add_notes() {
    local course_code=$1
    local source_file=$2
    local module_number=$3
    local module_name=$4
    local file_extension=$5
    
    local semester_dir=$(get_semester_dir $course_code)
    
    if [ "$semester_dir" = "unknown" ]; then
        echo "❌ Error: Unknown course code '$course_code'"
        return 1
    fi
    
    local target_dir="notes/$semester_dir/$course_code"
    local target_file="$target_dir/module${module_number}_${module_name}.${file_extension}"
    
    # Check if source file exists
    if [ ! -f "$source_file" ]; then
        echo "❌ Error: Source file '$source_file' not found"
        return 1
    fi
    
    # Create target directory if it doesn't exist
    mkdir -p "$target_dir"
    
    # Copy the file
    cp "$source_file" "$target_file"
    
    if [ $? -eq 0 ]; then
        echo "✅ Successfully added: $target_file"
        echo "   Source: $source_file"
        echo "   Target: $target_file"
    else
        echo "❌ Error: Failed to copy file"
        return 1
    fi
}

# Main menu
while true; do
    echo "What would you like to do?"
    echo "1. Show available courses"
    echo "2. Add notes for a course"
    echo "3. View current notes structure"
    echo "4. Exit"
    echo ""
    read -p "Enter your choice (1-4): " choice
    
    case $choice in
        1)
            show_courses
            ;;
        2)
            echo ""
            echo "=== Add Notes ==="
            read -p "Enter course code (e.g., 20MCA101): " course_code
            read -p "Enter path to your notes file: " source_file
            read -p "Enter module number (1-5): " module_number
            read -p "Enter module name (e.g., introduction_to_data_science): " module_name
            read -p "Enter file extension (pdf, docx, txt, etc.): " file_extension
            
            echo ""
            add_notes "$course_code" "$source_file" "$module_number" "$module_name" "$file_extension"
            ;;
        3)
            echo ""
            echo "=== Current Notes Structure ==="
            find notes/ -name "*.pdf" -o -name "*.docx" -o -name "*.txt" -o -name "*.html" | sort
            echo ""
            ;;
        4)
            echo "Goodbye!"
            exit 0
            ;;
        *)
            echo "Invalid choice. Please enter 1-4."
            ;;
    esac
    
    echo ""
    echo "Press Enter to continue..."
    read
    clear
done 