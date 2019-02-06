'use strict';

function Plane(){
  this._inHanger = false;
}

Plane.prototype.land = function(airport){
  if(!this._inHanger){
    airport.clearForLanding(this);
    this._location = airport;
    this._inHanger = true;
  }
  else{
    return ("Plane already landed!");
  }
};

Plane.prototype.takeoff = function(airport){
  this._location.clearForTakeoff(this);
};
