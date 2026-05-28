const manifest1 = {
  containerId: 1, // numbers only
  destination: "santa cruz", // string only
  weight: 560, //numbers only
  unit: "lb", 
  hazmat: false, 
}

function validateManifest(manifest){
  const errors = {};
  
  // CONTAINER ID
  if(!Object.hasOwn(manifest, "containerId")){
    errors.containerId = "Missing";
  }else if(typeof manifest.containerId !== "number" || (typeof manifest.containerId === "string" &&manifest.containerId.trim() === "") || !manifest.containerId || manifest.containerId <= 0 || !Number.isInteger(manifest.containerId)){
    errors.containerId = "Invalid";
  };
  
  
  // DESTINATION
  if(!Object.hasOwn(manifest, "destination")){
    errors.destination = "Missing";
  }else if(typeof manifest.destination !== "string" || (typeof manifest.destination === "string" &&manifest.destination.trim() === "") || !manifest.destination){
    errors.destination = "Invalid";
  };

  // WEIGHT
  if(!Object.hasOwn(manifest, "weight")){
    errors.weight = "Missing";
  }else if(typeof manifest.weight !== "number" || (typeof manifest.weight === "string" && manifest.weight.trim() === "") || !manifest.weight || !Number.isInteger(manifest.weight) || manifest.weight <= 0){
    errors.weight = "Invalid";
  }; 

  // UNIT
  if(!Object.hasOwn(manifest, "unit")){
    errors.unit = "Missing";
  }else if(typeof manifest.unit !== "string" || (typeof manifest.unit === "string" && manifest.unit.trim() === "") || !manifest.unit){
    errors.unit = "Invalid";
  }else if(manifest.unit !== "kg" && manifest.unit !== "lb"){
    errors.unit = "Invalid";
  }; 

  // HAZMAT
  if(!Object.hasOwn(manifest, "hazmat")){
    errors.hazmat = "Missing";
  }else if(typeof manifest.hazmat !== "boolean" || (typeof manifest.hazmat === "string" && manifest.hazmat.trim() === "")){
    errors.hazmat = "Invalid";
  }; 

  if(Object.keys(errors).length === 0){
    return {};
  }

  return errors;
  
};


console.log(validateManifest(manifest1));
console.log(typeof(manifest1));