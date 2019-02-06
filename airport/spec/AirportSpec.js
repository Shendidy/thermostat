'use strict';

describe('Airport', function(){
  var airport;
  var plane1;
  var plane2;
  beforeEach(function(){
    airport = new Airport();
    plane1 = jasmine.createSpy('plane');
    plane2 = jasmine.createSpy('plane');
  });
  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });
  it('can clear planes for landing', function(){
    airport.clearForLanding(plane1);
    expect(airport.planes()).toEqual([plane1]);
  });
  it('can clear planes for taking off', function(){
    airport.clearForLanding(plane1);
    airport.clearForTakeoff(plane1);
    expect(airport.planes()).toEqual([]);
  });
  it('can clear planes for taking off', function(){
    airport.clearForLanding(plane1);
    airport.clearForLanding(plane2);
    airport.clearForTakeoff(plane1);
    expect(airport.planes()).toEqual([plane2]);
  });
});
