#!/usr/bin/env python3
"""
Script to generate sample question paper files for demonstration purposes.
This creates placeholder PDF files for all semesters and years.
"""

import os
import subprocess
from pathlib import Path

def create_sample_pdf(content, output_path):
    """Create a simple PDF file with the given content using reportlab."""
    try:
        from reportlab.pdfgen import canvas
        from reportlab.lib.pagesizes import letter
        from reportlab.lib.units import inch
        
        c = canvas.Canvas(output_path, pagesize=letter)
        c.setFont("Helvetica", 12)
        
        # Split content into lines and draw them
        y_position = 750
        for line in content.split('\n'):
            if line.strip():
                c.drawString(50, y_position, line)
                y_position -= 15
        
        c.save()
        print(f"Created: {output_path}")
        return True
    except ImportError:
        # Fallback: create a text file if reportlab is not available
        with open(output_path.replace('.pdf', '.txt'), 'w') as f:
            f.write(content)
        print(f"Created: {output_path.replace('.pdf', '.txt')} (reportlab not available)")
        return False

def generate_sample_papers():
    """Generate sample question papers for all semesters and years."""
    
    semesters = {
        'semester_i': 'Semester I',
        'semester_ii': 'Semester II', 
        'semester_iii': 'Semester III',
        'semester_iv': 'Semester IV'
    }
    
    years = [2020, 2021, 2022, 2023, 2024, 2025]
    
    # Create question_papers directory if it doesn't exist
    base_dir = Path('question_papers')
    base_dir.mkdir(exist_ok=True)
    
    for semester_dir, semester_name in semesters.items():
        # Create semester directory
        semester_path = base_dir / semester_dir
        semester_path.mkdir(exist_ok=True)
        
        for year in years:
            filename = f"{semester_dir}_{year}_question_paper.pdf"
            filepath = semester_path / filename
            
            # Generate content for the question paper
            content = f"""APJ ABDUL KALAM TECHNOLOGICAL UNIVERSITY
MCA {semester_name} - Previous Year Question Paper
Academic Year: {year}-{year + 1}

This is a sample question paper for {semester_name} from the year {year}.

Note: This is a placeholder file for demonstration purposes.

File: {filename}
Academic Year: {year}-{year + 1}

Sample Questions:
1. What are the key concepts covered in {semester_name}?
2. Explain the main topics and their importance.
3. Discuss the practical applications of the concepts learned.

Marking Scheme:
- Question 1: 10 marks
- Question 2: 15 marks  
- Question 3: 15 marks

Total: 40 marks

This file demonstrates the structure and format of actual question papers.
For real question papers, replace these placeholder files with actual PDF documents.
"""
            
            create_sample_pdf(content, str(filepath))

if __name__ == "__main__":
    print("Generating sample question papers...")
    generate_sample_papers()
    print("Sample question papers generated successfully!")
    print("\nNote: These are placeholder files for demonstration purposes.")
    print("To add real question papers, replace these files with actual PDF documents.") 