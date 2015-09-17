Ember Gestures
----------------

[![Stories in Ready](https://badge.waffle.io/runspired/ember-gestures.png?label=ready&title=Ready)](https://waffle.io/runspired/ember-gestures)

[![npm version](https://badge.fury.io/js/ember-gestures.svg)](http://badge.fury.io/js/ember-gestures)
[![Build Status](https://travis-ci.org/runspired/ember-gestures.svg?branch=master)](https://travis-ci.org/runspired/ember-gestures)
[![Ember Observer Score](http://emberobserver.com/badges/ember-gestures.svg)](http://emberobserver.com/addons/ember-gestures)

Gesture and Mobile support for Ambitious Ember Applications.

###[Changelog](./CHANGELOG.md)

[![dependencies](https://david-dm.org/runspired/ember-gestures.svg)](https://david-dm.org/runspired/ember-gestures)
[![devDependency Status](https://david-dm.org/runspired/ember-gestures/dev-status.svg)](https://david-dm.org/runspired/ember-gestures#info=devDependencies)


##Installation

`ember install ember-gestures`


# Features

## Fastclick via touch-action CSS and the Hammer-time Polyfill

### Touch-action

All components available via `ember-gestures` have a `style` attribute set to `touch-action: manipulation; -ms-touch-action: manipulation`.
All `link-components` and elements with actions on them are modified to also have this style attribute.

### Components

Components available by default include `context-element`, `fast-action`, and `fast-async`.

### Polyfill

`ember-gestures` uses [hammer-time](https://github.com/hammerjs/hammer-time) as a polyfill for `touch-action` CSS
to enable cross-platform `fastclick`.  This polyfill works based on the presence of `style="touch-action: <foo>;"`
being present on an element.



## Gestures via HammerJS


When you run the default blueprint (runs by default when you do `ember install` or by `ember g ember-gestures`),
this addon will install [HammerJS 2.1.x](https://github.com/hammerjs/hammer.js).

# WARNING
HammerJS 2.0.5 and 2.1.x have not been released yet but contain bug fixes essential for this to work,
specifically fixes for configs leaking between manager instances. To install hammer, bower install this branch
while this warning persists:

```
bower install --save runspired/hammer.js#develop
```

The addon wires HammerJS into your app as a global (Hammer), and provides various means by which to use HammerJS
in your app.  All manager instances created by this addon will emit domEvents, which Ember has been configured to
utilize.  This means that using Hammer with Ember is just like using any other event with ember, you add event
handlers to your components.

For example
```
import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({
  panStart(e) {
     ... do something with the event ...
    }
});
```

#### CAVEAT
Hammer 2.1.x doesn't exist yet ;)  This repo is using a branch that will become Hammer 2.1.x in order to take
advantage of several bugfixes that will be in the upcoming 2.0.5 release and a new eventing option available in
the 2.1.0 release.


## In the Box

In addition to the basic hammer functionality present in the box, ember-gestures comes with several blueprints for advanced usage which you can install separately.

### Custom Recognizers.

### Additional Recognizers.

### Using Hammer Globally

### Event Delegation

### Components to help you get started.


##Usage

##Configuration


##touchZone

Sometimes smaller buttons or critical buttons need a larger capture area than their visible area.
You can increase the area that recognizes touch events for a specific button
https://gist.github.com/runspired/506f39a4abb2be48d63f


## Writing Tests

### Ensuring a manager is configured correctly.

### Using the triggerGesture helper.

### Using the trigger helper.

**Important** The jQuery events you need to trigger are the Hammer variant, meaning it is entirely lowercase `swiperight`, `panup`.


## Tips and Tricks

Don't bind within `{{#each}}`, use a base recognizer instead.
