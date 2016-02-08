# dirlist-static

Generate a static index.html file listing the files in a directory and its
subdirectories.

## Usage

    $ dirlist-static [--filter regex-to-filter-filenames]

For example:

    $ dirlist-static --filter html?$

Will write an index.html that contains links only htm/html files found in this
directory tree. Without a filter, links are written to all files.
