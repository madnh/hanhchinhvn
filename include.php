<?php
define('ROOT', __DIR__);
define('DS', DIRECTORY_SEPARATOR);
define('DIST_DIR', ROOT . DS . 'dist');
define('EXCEL_FILES_DIR_NAME', 'excel_files');
define('EXCEL_FILES_DIR', ROOT . DS . EXCEL_FILES_DIR_NAME);

require 'vendor/autoload.php';

function slug($string)
{
    static $slugify;

    if (!$slugify) {
        $slugify = new \Cocur\Slugify\Slugify();
    }

    return $slugify->slugify($string);
}