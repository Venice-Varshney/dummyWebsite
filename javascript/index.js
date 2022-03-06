
function showTabs(selected, but1, but2){
  var selectedDiv = document.getElementById(selected);
  var selectedButton = document.getElementById(`${selected}Button`);
  var deselectedDiv1 = document.getElementById(but1);
  var deselectedButton1 = document.getElementById(`${but1}Button`)
  var deselectedDiv2 = document.getElementById(but2);
  var deselectedButton2 = document.getElementById(`${but2}Button`)
  selectedDiv.style.display = "block";
  deselectedDiv1.style.display = "none";
  deselectedDiv2.style.display = "none";
  selectedButton.disabled = true;
  selectedButton.className = "buttonSelected";
  deselectedButton1.disabled = false;
  deselectedButton1.className = "buttonDeselected";
  deselectedButton2.disabled = false;
  deselectedButton2.className = "buttonDeselected";
};