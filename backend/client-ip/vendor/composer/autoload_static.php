<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitc905e57056d452f4dec48ad88f5980d6
{
    public static $classMap = array (
        'ClientIP' => __DIR__ . '/../..' . '/src/ClientIP.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInitc905e57056d452f4dec48ad88f5980d6::$classMap;

        }, null, ClassLoader::class);
    }
}
