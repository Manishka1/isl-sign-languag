export const O = (ref) => {
  let animations = [];

  // Fingers curling on right hand to make the circular shape of "P"

  // Index finger curling to form the circle curve
  animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI / 4.2, "+"]);
  animations.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI / 4.2, "+"]);
  animations.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI / 4.2, "+"]);

  // Middle finger curling more for the circular shape
  animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI / 1.5, "+"]);
  animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI / 1.5, "+"]);
  animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI / 1.5, "+"]);

  // Ring finger curling inward (less curled than middle)
  animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI / 1.6, "+"]);
  animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI / 1.6, "+"]);
  animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI / 1.6, "+"]);

  // Pinky finger curling inward more
  animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI / 1.8, "+"]);
  animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI / 1.8, "+"]);
  animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI / 1.8, "+"]);

  // Thumb bending and rotating to complete the circular shape of "P"
  animations.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI / 2.3, "+"]);
  animations.push(["mixamorigRightHandThumb1", "rotation", "y", Math.PI / 15, "+"]);
  animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI / 10, "-"]);
  animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI / 10, "-"]);

  // Wrist & Hand rotation for natural circular shape
  animations.push(["mixamorigRightHand", "rotation", "z", -Math.PI / 5, "-"]);
  animations.push(["mixamorigRightHand", "rotation", "y", Math.PI / 6, "+"]);

  // Forearm and arm rotation for natural pose
  animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI / 5.3, "+"]);
  animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI / 18, "+"]);

  animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI / 6.5, "-"]);
  animations.push(["mixamorigRightArm", "rotation", "z", Math.PI / 2.7, "+"]);

  // Push animation to ref
  ref.animations.push(animations);

  // Reset animation neutral pose for right hand only
  animations = [];

  const rightHandBones = [
    "RightHandIndex1", "RightHandIndex2", "RightHandIndex3",
    "RightHandMiddle1", "RightHandMiddle2", "RightHandMiddle3",
    "RightHandRing1", "RightHandRing2", "RightHandRing3",
    "RightHandPinky1", "RightHandPinky2", "RightHandPinky3",
    "RightHandThumb1", "RightHandThumb2", "RightHandThumb3",
    "RightHand", "RightForeArm", "RightArm"
  ];

  rightHandBones.forEach((bone) => {
    animations.push([`mixamorig${bone}`, "rotation", "x", 0, "+"]);
    animations.push([`mixamorig${bone}`, "rotation", "y", 0, "+"]);
    animations.push([`mixamorig${bone}`, "rotation", "z", 0, "+"]);
  });

  ref.animations.push(animations);

  if(ref.pending === false){
    ref.pending = true;
    ref.animate();
  }
};