Drupal Console on Kalabox
=================

**"Drupal Console on Kalabox"** is a [Kalabox](http://kalabox.io) plugin that allows users to add [Drupal Console](https://drupalconsole.com) to their Kalabox app so they can run Drupal Console commands on their dev sites.

**If you are unfamiliar with Kalabox we highly recommend you read the main [Kalabox docs](http://docs.kalabox.io) before continuing.**

Installation
------------

Before you install **"Drupal Console on Kalabox"**  we assume you have [installed Kalabox](http://docs.kalabox.io/en/stable/users/install/) and have a running Kalabox app. You will also need to have [node and npm](http://nodejs.org) installed.

**Download the plugin**

```bash
# Go into an app you are running
cd /path/to/my/app

# Install plugin with npm
npm install https://github.com/bmcclure/kalabox-plugin-drupal-console.git --save
```

**Activate the plugin**

Find the `kalabox.yml` for your app and ensure `kalabox-plugin-drupal-console` is included in your list of plugins. NOTE: You may need to add `plugins` if it does not already appear in your `kalabox.yml` file.

```yaml
plugins:
  - kalabox-plugin-drupal-console
```

**Restart the app**

Restart your app. This will download and build any needed Docker images provided by the plugin.

```bash
# Restart the app with debug more on so we can get some extra info
kbox restart -- -d
```

Initializing Drupal Console
--------------------------

```bash
# Initialize drupal console configuration
kbox drupal init
```

This will generate the configuration for Drupal console, which can
then be found in your application directory under /config/drupal-console.

Using Drupal Console
------------

You will want to confer with the [Drupal Console documentation](https://drupalconsole.com/docs) on the various commands you can run with Drupal Console. Here is how you invoke  `drupal` commands via Kalabox.

`kbox drupal <console arguments>`

```
Options:
  -h, --help     Display help message.                                      [boolean]
  -v, --verbose  Use verbose output.                                        [boolean]
  -d, --debug    Use debug output.                                          [boolean]
```

```bash
# Create a module
kbox drupal generate:module [options]
```

For Developers
--------------

Developers can install the plugin with git.

```bash
cd /path/to/app
mkdir -p plugins
cd plugins
git clone https://github.com/bmcclure/kalabox-plugin-drupal-console.git
cd kalabox-plugin-drupal-console
npm install
```

Then follow the steps to activate the plugin and restart the app from the main installation steps above.
