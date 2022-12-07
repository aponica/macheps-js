//=============================================================================
//  Copyright 2022 Opplaud LLC and other contributors. MIT licensed.
//=============================================================================

//-----------------------------------------------------------------------------
//  Unit tests for macheps-js  function.
//-----------------------------------------------------------------------------

const hMachEps = require('../index');

//---------------------------------------------------------------------------

test( 'GT', fDone => {

  expect( hMachEps.fbGT( 1.23457, 1.23456 ) ).
    toBe( true );

  expect( hMachEps.fbGT( 1.2345678901234567, 1.2345678901234566 ) ).
    toBe( false );

  expect( hMachEps.fbGT( 1.23456, 1.23457 ) ).
    toBe( false );

  fDone();

  } ); // test(AndWithOptionsPasses)

// EOF
