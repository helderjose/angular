#!/bin/bash
clear



# Delete node_modules folders
AUX=true
while [ "$AUX" = "true" ]
do
    FOLDER_DELETE=$(find . -type d -name "node_modules" | head -n 1 | xargs)

    if [ $FOLDER_DELETE ]
    then
        echo $FOLDER_DELETE
        rm -rf $FOLDER_DELETE
    else
        AUX=false
    fi

done


# Delete package-lock.json
AUX=true
while [ "$AUX" = "true" ]
do
    FILE_DELETE=$(find . -type f -name "package-lock.json" | head -n 1 | xargs)

    if [ $FILE_DELETE ]
    then
        echo $FILE_DELETE
        rm -f $FILE_DELETE
    else
        AUX=false
    fi

done