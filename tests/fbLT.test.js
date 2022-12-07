//=============================================================================
//  Copyright 2022 Opplaud LLC and other contributors. MIT licensed.
//=============================================================================

//-----------------------------------------------------------------------------
//  Unit tests for macheps-js  function.
//-----------------------------------------------------------------------------

const hMachEps = require('../index');

//---------------------------------------------------------------------------

test( 'LT', fDone => {

  expect( hMachEps.fbLT( 1.23456, 1.23457 ) ).
    toBe( true );

  expect( hMachEps.fbLT( 1.2345678901234566, 1.2345678901234567 ) ).
    toBe( false );

  expect( hMachEps.fbLT( 1.23457, 1.23456 ) ).
    toBe( false );

  fDone();

  } ); // test(AndWithOptionsPasses)

// EOF
