- [PHASE 2 - Basic File Management](#phase-2---basic-file-management)
  - [Dependencies:](#dependencies)
  - [Features:](#features)


****************************************************************************
# PHASE 2 - Basic File Management

Create a basic file management and version system.

****************************************************************************
## Dependencies:

INTERNAL:

- phase 0
- phase 1

EXTERNAL:

- DynamoDB (store file paths / data)
- S3 (store files)

****************************************************************************
## Features:

- Upload Profile Image
- Create an Item - a collection of files / data 
- stl files (single):
    - Upload .stl file to an item
    - Download .stl file from an item
    - Delete .stl file from an item
- gcode files (dir):
    - Upload .gcode file(s) to an item
    - Download .gcode file(s) from an item
    - Delete .gcode file(s) from an item
- source files (dir):
    - Upload src file(s) to an item
    - Download src file(s) from an item
    - Delete src file(s) from an item
- notes (dir):
    - Upload a note file
    - Edit a note file
    - Download a note file
    - Delete a note file
- Download an entire item as directory (by version or all versions - instructions not generated yet)
    - myModel
        - myModel_1.0.0
            - README.md <!-- All basic data about the model as well as where to find additional data - meta -->
            - stl
                - myModel.stl
            - gcode
                - myModel.gcode
            - source
                - myModel.inv
                - myModel.f3d
            - meta
                - notes.md <!-- notes about the item / models / comments? / etc. -->
                - settings.md <!-- recommended settings extracted from the gcode settings -->
                - comments.md <!-- comments on this part created by other users - may contain important steps or recommendations -->
            - instructions
                - instructions.md <!-- instructions in text format - see instructions-text-example.md -->
                - instructions.pdf <!-- instructions in pdf format with images from each build step - see pdf-instructions-example.img -->
        - myModel_1.0.1
            - README.md <!-- All basic data about the model as well as where to find additional data - meta -->
            - stl
                - myModel.stl
            - gcode
                - myModel.gcode
            - source
                - myModel.inv
                - myModel.f3d
            - meta
                - notes.md <!-- notes about the item / models / comments? / etc. -->
                - settings.md <!-- recommended settings extracted from the gcode settings -->
                - comments.md <!-- comments on this part created by other users - may contain important steps or recommendations -->
            - instructions
                - instructions.md <!-- instructions in text format - see instructions-text-example.md -->
                - instructions.pdf <!-- instructions in pdf format with images from each build step - see pdf-instructions-example.img -->
