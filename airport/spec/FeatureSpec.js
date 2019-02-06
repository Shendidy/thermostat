'use strict';

describe('Feature Test:', function(){
  var plane1;
  var plane2;
  var airport;

  beforeEach(function(){
    plane1 = new Plane();
    plane2 = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at an airport', function(){
    plane1.land(airport);
    expect(airport.planes()).toContain(plane1);
  });
  it('planes can be instructed to takeoff from an airport', function(){
    plane1.land(airport);
    plane1.takeoff(airport);
    expect(airport.planes()).not.toContain(plane1);
  });
  it('planes can\'t be instructed to land if already in airport', function(){
    plane1.land(airport);
    expect(plane1.land(airport)).toEqual("Plane already landed!");
    plane1.land(airport);
    expect(airport.planes()).toEqual([plane1]);
  });
  it('planes removed from hanger after takeoff from airport', function(){
    plane1.land(airport);
    plane2.land(airport);
    plane1.takeoff(airport);
    expect(airport.planes()).toEqual([plane2]);
  });
});
