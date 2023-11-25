<?php
$urls = [
    ['path' => '/', 'priority' => 1.0, 'changefreq' => 'daily'],
    ['path' => '/products', 'priority' => 0.99, 'changefreq' => 'daily'],
    ['path' => '/blog', 'priority' => 0.8, 'changefreq' => 'weekly'],
    ['path' => '/licenses', 'priority' => 0.8, 'changefreq' => 'weekly'],
    ['path' => '/contact', 'priority' => 0.7, 'changefreq' => 'monthly'],
    ['path' => '/login', 'priority' => 0.2, 'changefreq' => 'monthly'],
    ['path' => '/tos', 'priority' => 0.2, 'changefreq' => 'monthly'],
    ['path' => '/pp', 'priority' => 0.2, 'changefreq' => 'monthly'],
    ['path' => '/rp', 'priority' => 0.2, 'changefreq' => 'monthly'],
    ['path' => '/lm', 'priority' => 0.2, 'changefreq' => 'monthly'],
    ['path' => '/product/296', 'priority' => 0.75, 'changefreq' => 'daily'],
    ['path' => '/product/326', 'priority' => 0.75, 'changefreq' => 'daily'],
    ['path' => '/product/257', 'priority' => 0.75, 'changefreq' => 'daily'],
    ['path' => '/product/585', 'priority' => 0.75, 'changefreq' => 'daily'],
    ['path' => '/product/271', 'priority' => 0.75, 'changefreq' => 'daily'],
];

$publicPath = 'public/assets'; // Répertoire de destination pour le fichier sitemap
$filename = 'sitemap.xml'; // Nom du fichier sitemap

// Fonction pour extraire l'URL canonique et la date de dernière modification à partir du contenu HTML d'une page
function extractCanonicalAndLastmod($pageContent) {
    $dom = new DOMDocument;
    $dom->loadHTML($pageContent);
    $canonicalLinks = $dom->getElementsByTagName('link');
    $lastmod = null;
    $canonicalUrl = null;

    foreach ($canonicalLinks as $link) {
        if ($link->hasAttribute('rel') && $link->getAttribute('rel') === 'canonical') {
            $canonicalUrl = $link->getAttribute('href');
        }
    }

    $lastmodMeta = $dom->getElementsByTagName('meta');
    foreach ($lastmodMeta as $meta) {
        if ($meta->hasAttribute('name') && $meta->getAttribute('name') === 'lastmod') {
            $lastmod = $meta->getAttribute('content');
        }
    }

    return ['canonical' => $canonicalUrl, 'lastmod' => $lastmod];
}

// Créez le contenu du sitemap XML avec les URL canoniques et les dates de dernière modification
$xml = '<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

foreach ($urls as $urlData) {
    $path = $urlData['path'];
    $priority = $urlData['priority'];
    $changefreq = $urlData['changefreq'];
    $pageContent = file_get_contents('https://privatewebsite.bagou450.com' . $path);
    $metadata = extractCanonicalAndLastmod($pageContent);

    if ($metadata['canonical']) {
        $xml .= '
    <url>
        <loc>' . htmlspecialchars($metadata['canonical']) . '</loc>
        <priority>' . $priority . '</priority>
        <changefreq>' . $changefreq . '</changefreq>
        <lastmod>' . $metadata['lastmod'] . '</lastmod>
    </url>';
    }
}

$xml .= '
</urlset>';

// Enregistrez le fichier sitemap dans le répertoire de destination
$filepath = $publicPath . '/' . $filename;
file_put_contents($filepath, $xml);

echo 'Le fichier sitemap a été généré avec succès : ' . $filepath;
?>
