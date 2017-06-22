# Using environment variables as part of a file location in effects

In effects where a file location is requested, you can include environment variables defined in Windows as part of the location. The environment variable strings will be replaced with the values defined for the current user when the effect is run.

For example, the environment variable **TEMP** contains the location of the temporary folder for the current user. To specify a file name located in the temporary folder, type the name of the environment variable enclosed by %, and then the name of the file:

**%TEMP%\\a-file-name**