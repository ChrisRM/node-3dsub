Configuration
===

* info
    * **title** -  This is a description of the script. If the original author(s) did not provide this information then <untitled> is automatically substituted.
    * **original_script** - 
**Title**  
This is a description of the script. If the original author(s) did not provide this information then <untitled> is automatically substituted.

**OriginalScript**  
The original author(s) of the script. If the original author(s) did not provide this information then <unknown> is automatically substituted.

**OriginalTranslation** *(optional)*  
The original translator of the dialogue. This entry does not appear if no information was entered by the author.

**OriginalEditing** *(optional)*  
The original script editor(s), typically whoever took the raw translation and turned it into idiomatic english and reworded for readability.
This entry does not appear if no information was entered by the author.

**OriginalTiming** *(optional)*  
Whoever timed the original script. This entry does not appear if no information was entered by the author.

**SyncPoint** *(optional)*  
Description of where in the video the script should begin playback. This entry does not appear if no information was entered by the author.

**ScriptUpdatedBy** *(optional)*  
Names of any other subtitling groups who edited the original script. This entry does not appear if subsequent editors did not enter the information.

**UpdateDetails**  
The details of any updates to the original script - made by other subtitling groups. This entry does not appear if subsequent editors did not enter any information.

**ScriptType**  
This is the SSA script format version eg. "V4.00". It is used by SSA to give a warning if you are using a version of SSA older than the version that created the script. ASS version is `V4.00+`.

**Collisions**  
This determines how subtitles are moved, when automatically preventing onscreen collisions. 
If the entry says "Normal" then SSA will attempt to position subtitles in the position specified by the "margins". 
However, subtitles can be shifted vertically to prevent onscreen collisions. 
With "normal" collision prevention, the subtitles will "stack up" one above the other - but they will always be positioned as close the vertical (bottom) margin as possible - filling in "gaps" in other subtitles if one large enough is available. 
If the entry says "Reverse" then subtitles will be shifted upwards to make room for subsequent overlapping subtitles. 
This means the subtitles can nearly always be read top-down - but it also means that the first subtitle can appear half way up the screen before the subsequent overlapping subtitles appear. 
It can use a lot of screen area.

**PlayResX**  
This is the width of the screen used by the script's author(s) when playing the script. SSA v4 will automatically select the nearest enabled setting, if you are using Directdraw playback.

**PlayRexY**  
This is the height of the screen used by the script's author(s) when playing the script. SSA v4 will automatically select the nearest enabled setting, if you are using Directdraw playback.

**PlayDepth**  
This is the colour depth used by the script's author(s) when playing the script. SSA will automatically select the nearest enabled setting if you are using Directdraw playback.

**Timer**  
This is the Timer Speed for the script, as a percentage

Style Lines, [v4+ Styles] section
===

**Name**  
The name of the Style. Case sensitive. Cannot include commas.

Fontname. The fontname as used by Windows. Case-sensitive.

Fontsize.

PrimaryColour. A long integer BGR (blue-green-red)  value. ie. the byte order in the hexadecimal equivelent of this number is BBGGRR

This is the colour that a subtitle will normally appear in.

SecondaryColour. A long integer BGR (blue-green-red)  value. ie. the byte order in the hexadecimal equivelent of this number is BBGGRR

This colour may be used instead of the Primary colour when a subtitle is automatically shifted to prevent an onscreen collsion, to distinguish the different subtitles.

OutlineColor (TertiaryColour). A long integer BGR (blue-green-red)  value. ie. the byte order in the hexadecimal equivelent of this number is BBGGRR

This colour may be used instead of the Primary or Secondary colour when a subtitle is automatically shifted to prevent an onscreen collsion, to distinguish the different subtitles.

BackColour. This is the colour of the subtitle outline or shadow, if these are used. A long integer BGR (blue-green-red)  value. ie. the byte order in the hexadecimal equivelent of this number is BBGGRR.

The color format contains the alpha channel, too. (AABBGGRR)

Bold. This defines whether text is bold (true) or not (false). -1 is True, 0 is False. This is independant of the Italic attribute - you can have have text which is both bold and italic.

Italic. This defines whether text is italic (true) or not (false). -1 is True, 0 is False. This is independant of the bold attribute - you can have have text which is both bold and italic.
