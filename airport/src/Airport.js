'use strict';

function Airport(){
  this._hanger = [];
}

Airport.prototype.planes = function(){ return this._hanger; };

Airport.prototype.clearForLanding = function(plane){
  // var landed = this._hanger.includes(plane);
  // if(!landed){
    this._hanger.push(plane);
  // }
  // else{
  //   return ("Plane already landed!");
  // }
};

Airport.prototype.clearForTakeoff = function(plane){
  this._hanger.splice(this._hanger.indexOf(plane),1);
};
