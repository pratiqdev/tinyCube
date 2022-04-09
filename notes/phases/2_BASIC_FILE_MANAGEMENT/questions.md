# QUESTIONS


- How to create a new version after the first one is created
- How would versions work?
  [?] start at version 1.0 ?
  [Y] Are subversions useful for any reason? or just use standard versioning? (v1, v2, v3, ...)
    - Subversions are used when the stl file / source files have no changes - but the gcode has been changed
  [?] options to create a new version: [new version | new subversion (patch?)]
  [?] would patches (1.1) copy the existing data to a new version?
    - this way small changes can be made to data while keeping all other data
  [N] New versions (2.0) would use the same .stl file and ignore all other data?

- Version types: (major.minor.patch / 1.0.0)
  - MAJOR: major changes to the source design
  - MINOR: minor changes to the source design
  - PATCH: changes to the output gcode only

- Different ways I might use versioning:
  - ITEM 1================================================================================
    - v1.0.0:
      - Upload stl file
      - Upload .gcode file
      - Upload source file
      - Take some notes
      - Try to print
      - PRINT FAILS (incorrect dimensions - need to modify source => stl => gcode)
    - v2.0.0:
      - Upload new .stl
      - Upload new .gcode
      - Upload new source
      - Take some notes
      - Try to print
      - PRINT FAILS (bad gcode - need to modify gcode only)
    - v2.0.1:
      - Upload new .gcode file
      - Use v2.0 stl
      - Use v2.0 source
  - ITEM 2================================================================================
    - v1.0.0:
      - Upload .stl file
      - Upload .gcode file
      - Upload source file
      - Take some notes
      - Try to print
      - PRINT FAILS (bad gcode - need to modify gcode only)
    - v1.0.1:
      - Use v1.0.0 .stl
      - Use v1.0.0 source
      - Upload new .gcode
      - Try to print


[?] Uploading new source files creates a new major version automatically
[?] Uploading new stl files creates a new minor version automatically
[?] Uploading new gcode files creates a new patch version automatically 

[?] File types are stored in their own array with version numbers attached
