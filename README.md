Pathfinder 2e Area Visualizer (WIP)
=======
##### A Java Spring Boot, MongoDB and Angular project
This project uses Java Spring with MongoDB integration as a backend, with a frontend in Angular.

The list of spells (taken from [Archives of Nethys](https://2e.aonprd.com/Spells.aspx)) have been treated to only include those with an area.
Currently, the app is very barebones. It currently can search through the spells, open a page detailing the spell and rendering the correct area component.

##### TODO
* Implementing the area visualisation for the given spells
* Implementing a custom area page
* Hosting the website, probably by Dockerizing it

##### Running instructions
Open in your favorite IDE. Run `Application.java` and `ng serve` in an integrated terminal in `Pf2eAreaVisualiser`.
