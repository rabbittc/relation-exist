Package.describe({
    name: 'theara:relation-exist',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'Check relation exist',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/rabbittc/relation-exist.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');

    api.use('underscore');

    api.export('relationExist');

    api.addFiles('relationExist.js');
});
