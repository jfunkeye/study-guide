#!/bin/bash

# Script to dump ALL files and contents to a text file
# Usage: ./dump.sh [output_filename]

# Default output filename
OUTPUT_FILE="${1:-codebase_dump.txt}"

# Colors for output (optional)
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Files and directories to exclude
EXCLUDE_DIRS="node_modules|.git|.expo|.next|dist|build|.cache|coverage|.vscode|.idea|__pycache__|venv|env|.venv"
EXCLUDE_FILES=".DS_Store|package-lock.json|yarn.lock|*.log|*.lock|*.pyc"

# File extensions to treat as text (force show content)
TEXT_EXTENSIONS="js|jsx|ts|tsx|json|css|html|xml|md|txt|yml|yaml|sh|bash|py|java|c|cpp|h|hpp|rb|php|go|rs|swift|kt|scss|sass|less|vue|astro"

echo -e "${GREEN}📁 Generating complete codebase dump...${NC}"
echo -e "${YELLOW}Output file: ${OUTPUT_FILE}${NC}"
echo -e "${YELLOW}Excluding: ${EXCLUDE_DIRS} directories${NC}"
echo ""

# Start writing to output file
{
    echo "==========================================="
    echo "COMPLETE CODEBASE DUMP - $(date)"
    echo "Generated from: $(pwd)"
    echo "==========================================="
    echo ""
    
    # Section 1: Directory Structure
    echo "==========================================="
    echo "📁 DIRECTORY STRUCTURE"
    echo "==========================================="
    echo ""
    
    # Generate tree structure (if tree command exists)
    if command -v tree &> /dev/null; then
        tree -a -I "$EXCLUDE_DIRS" --dirsfirst
    else
        find . -type d -not -path "*/\.*" -not -path "*/node_modules/*" -not -path "*/.git/*" | sort | sed -e "s/[^-][^\/]*\//  |/g" -e "s/|\([^ ]\)/|-\1/"
    fi
    
    echo ""
    echo ""
    
    # Section 2: File List by Extension
    echo "==========================================="
    echo "📄 FILE LIST (by extension)"
    echo "==========================================="
    echo ""
    
    # Group files by extension
    find . -type f \
        -not -path "*/node_modules/*" \
        -not -path "*/.git/*" \
        -not -path "*/dist/*" \
        -not -path "*/build/*" \
        -not -path "*/.expo/*" \
        -not -name "*.log" \
        -not -name "package-lock.json" \
        -not -name "yarn.lock" \
        2>/dev/null | sed 's|.*\.||' | sort | uniq -c | sort -rn | while read count ext; do
            echo "  $count .$ext files"
        done
    
    echo ""
    echo ""
    
    # Section 3: ALL FILE CONTENTS
    echo "==========================================="
    echo "📝 ALL FILE CONTENTS"
    echo "==========================================="
    echo ""
    echo "NOTE: All text files show full content with line numbers"
    echo ""
    
    # Find and display ALL files (except excluded directories and output file)
    find . -type f \
        -not -path "*/node_modules/*" \
        -not -path "*/.git/*" \
        -not -path "*/dist/*" \
        -not -path "*/build/*" \
        -not -path "*/.expo/*" \
        -not -name "*.log" \
        -not -name "package-lock.json" \
        -not -name "yarn.lock" \
        -not -name "*.png" \
        -not -name "*.jpg" \
        -not -name "*.jpeg" \
        -not -name "*.gif" \
        -not -name "*.ico" \
        -not -name "*.webp" \
        -not -name "*.pdf" \
        -not -name "*.ttf" \
        -not -name "*.otf" \
        -not -name "*.woff" \
        -not -name "*.woff2" \
        -not -name "*.eot" \
        -not -name "*.mp4" \
        -not -name "*.mp3" \
        -not -name "*.wav" \
        -not -name "*.mov" \
        2>/dev/null | sort | while read -r file; do
            
            # Skip if it's the output file itself
            if [[ "$file" == "./$OUTPUT_FILE" ]] || [[ "$file" == "$OUTPUT_FILE" ]]; then
                continue
            fi
            
            echo ""
            echo "==========================================="
            echo "📄 FILE: $file"
            echo "==========================================="
            echo ""
            
            # Try to display file contents
            if [[ -f "$file" ]] && [[ -r "$file" ]]; then
                # Get file extension
                ext="${file##*.}"
                
                # Check if it's a text file by extension or mime type
                if [[ "$ext" =~ ^($TEXT_EXTENSIONS)$ ]] || file -b --mime-type "$file" | grep -q "^text/"; then
                    # Display text file with line numbers
                    echo "--- FULL CONTENT (with line numbers) ---"
                    cat -n "$file" 2>/dev/null || nl -ba "$file" 2>/dev/null
                else
                    # For binary/image files, just show info (no hex dump)
                    echo "--- BINARY/IMAGE FILE (content skipped) ---"
                    echo "File type: $(file -b "$file")"
                    echo "File size: $(du -h "$file" | cut -f1)"
                    echo ""
                    echo "NOTE: Binary content not displayed - only text files shown"
                fi
            else
                echo "[Unable to read file]"
            fi
            
            echo ""
        done
    
    echo ""
    echo "==========================================="
    echo "✅ DUMP COMPLETE"
    echo "==========================================="
    echo "Generated: $(date)"
    echo "Total files processed: $(find . -type f -not -path "*/node_modules/*" -not -path "*/.git/*" 2>/dev/null | wc -l)"
    
} > "$OUTPUT_FILE"

echo -e "${GREEN}✅ Done!${NC}"
echo -e "${GREEN}📄 Output saved to: ${OUTPUT_FILE}${NC}"
echo -e "${YELLOW}File size: $(du -h "$OUTPUT_FILE" | cut -f1)${NC}"
echo ""
echo -e "${GREEN}✨ All code files show FULL content with line numbers!${NC}"
echo -e "${YELLOW}📝 Binary/image files are skipped (only names listed)${NC}"