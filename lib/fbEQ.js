"use strict";
//=============================================================================
//  Copyright 2019-2022 Opplaud LLC and other contributors. MIT licensed.
//=============================================================================

//-----------------------------------------------------------------------------
//  @alias module:@aponica/macheps-js.fbEQ
//
//  @public
//
//  @summary
//    Checks if one number equals another, within machine epsilon.
//
//  @param {Number} n1
//    The first value to compare.
//
//  @param {Number} n2
//    The second value to compare.
//
//  @returns {Boolean}
//    `true` if n1 equals n2 (within machine epsilon limit).
//-----------------------------------------------------------------------------

module.exports = ( n1, n2 ) => {
  return ( Math.abs( n1 - n2 ) < Number.EPSILON );
  };

// EOF
