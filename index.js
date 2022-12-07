"use strict";
//=============================================================================
//  Copyright 2019-2022 Opplaud LLC and other contributors. MIT licensed.
//=============================================================================

//-----------------------------------------------------------------------------
//  @module @aponica/macheps-js
//
//  @public
//
//  @summary
//    Comparison functions using machine epsilon in JS.
//
//  @description
//    Prevent rounding errors by comparing values within range of
//    [machine epsilon]{@link https://en.wikipedia.org/wiki/Machine_epsilon}.
//
//  @see lib/hMachEps.js
//-----------------------------------------------------------------------------

module.exports = {
  fbEQ: require( './lib/fbEQ.js' ),
  fbGT: require( './lib/fbGT.js' ),
  fbLT: require( './lib/fbLT.js' )
  };

// EOF

// EOF
