### **CodeNgrave: Laser Engraving Workflow**

#### **1. Frontend: User Uploads an Image**

-   **Action**: The user uploads an image for engraving.
-   **Output**: The image is sent to the backend (or Lambda function) for processing.

----------

#### **2. AWS Lambda: Process Image and Generate Tool Paths**

-   **Preprocess Image**:
    
    -   Resize the image to match the CNC workspace dimensions.
    -   Convert the image to **grayscale** (to prepare it for binary conversion).
-   **Convert to Binary (Black and White)**:
    
    -   The grayscale image is converted to **binary** (black and white).
        -   **Black pixels**: Represent engraving areas where the laser should be activated.
        -   **White pixels**: Represent non-engraving areas where the laser should be turned off.
-   **Generate Laser Tool Paths**:
    
    -   Scan the binary image pixel-by-pixel:
        -   **Black pixels**: The laser is turned on for engraving (set power/intensity to the appropriate level).
        -   **White pixels**: The laser is turned off (tool stays idle).
    -   The laser will follow these tool paths in **X, Y** directions, moving across the surface to engrave.
-   **Create G-code**:
    
    -   Compile the tool paths into G-code with laser-specific instructions (like turning the laser on/off for black/white pixels).
    -   Optionally, finalize with commands to lift the laser after engraving to ensure safety and readiness for the next engraving.

----------

#### **3. Backend (Node.js Server): Save G-code and Logs**

-   **Save G-code**:
    
    -   The backend stores the generated G-code (received from Lambda) in a file system or database.
-   **Save Logs**:
    
    -   The backend logs metadata (e.g., user ID, image processing details, timestamp).
-   **Provide G-code for Download**:
    
    -   The frontend provides a link to the user for downloading the generated G-code file.

----------
