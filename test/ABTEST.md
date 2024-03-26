## A/B Test Name: Academic Hall Search

* User Story Number: #6
* Metric (from the HEART grid): Adoption 

* Hypothesis: We want to give my users two ways to search for an academic hall. The first option is a way for them to use a search bar to type in the hall they are looking for, while the second option will give them a list of halls available here at URI and they can scroll through and find the hall they desire. One of these options will require them to know the hall their classes are in and how to spell them, while the other will take a little longer because they will have to scroll through the list to find what they are looking for.

* Experiment - Using firebase we will release each implementation to different percentages of people. We will track how long it takes people to find the hall they are looking for. The time it takes people to find the hall they need will let us know which implementation is best and will most likely be the best for  our users.


* Variations -
  
  A:  There will be a search bar at the top of the page after the user clicks “Search For A Hall” and once they type the hall they are         looking for they hit search and a map will display the hall and the closest parking lot to that hall.

   B:  There will be a list of halls that cover the screen when the user clicks “Search For A Hall” and they can scroll through the list        of halls, which are ordered alphabetically. They will then look for the hall they want to go to, once found they can select the          hall and a map will display the hall and the closest parking lot to that hall.





## A/B Test Name: Leaving Parking Lot Notification
* User Story Number: #7
* Metric (from the HEART grid): Engagement

  
Hypothesis: Many users may not actively use the Easy Parking app when leaving the parking lot, resulting in missed opportunities for engagement. By implementing a leaving parking lot notification feature that prompts users to provide feedback on parking availability or their intent to leave, we aim to increase user engagement and retention.

Experiment:
For the experiment setup, we will allocate 50% of our user base to the experiment group and the remaining 50% to the control group. All users will have access to the leaving parking lot notification feature, but only users in the experiment group will receive notifications. Firebase Analytics will be utilized to track user responses to the leaving parking lot notification, including the percentage of users who interact with the notification and their feedback on parking availability or intent to leave.

Variations:
* Variation A: Leaving parking lot notification with a direct question: "Are you leaving the parking lot?"
* Variation B: Leaving parking lot notification with an indirect question: "Is the parking lot full?"
Both variations will include options for users to respond with "Yes" or "No" and will provide an opportunity for users to provide additional feedback if desired. Diagrams and mockups illustrating the notification interface for both variations will be included in the experiment setup for visual reference.

## A/B Test Name: Parking Lot View

* User Story Number: #8
* Metric (from the HEART grid): CTR

* Hypothesis: We want to give the user the option to choose how they view the parking lots. Option A is a list view, presenting the names of each lot along with a picture of it. The user will be able to swipe left or right, and get the directions of the lot. When the user clicks the name, they will be presented with the map’s availability. Option B is a map view of the lots. The map view will be a clickable preview of the lot, showing the availability of the lot by color.

* Experiment: The experiment setup randomly assigns 50% of the user base to either the control group or one of two experimental groups (Option A or Option B). This random assignment ensures a fair comparison between the existing interface and the new features. This data-driven approach provides comprehensive insights to inform the decision-making process regarding the implementation of the new feature.

* Variations:

A: A list view that displays parking lots. Users can swipe to get directions to a specific lot, and click on the lot's name to see its availability.

B: A map view that immediately shows the availability of each parking lot without requiring any clicks. Users can see a preview of the lots and their respective availability at a glance.


## A/B Test Name: Source Parking Data from Users

* User Story Number: #5
* Metric (from the HEART grid): Task Success
  
* Hypothesis: Our app succeeds if our users provide us with parking data to pass onto others, so our methods of sourcing this data must be good to get as much high quality data as we can. One concern is that users will simply shut off the app and not provide us with traffic data once they reach a parking lot. We can attempt to incentivize data collection by gamifying it.

* Experiment: The experiment is activated through a toggleable setting. This will enable all users who wish to participate to do so, and will demonstrate if gamifying our app increases user data collection while not forcing users one way or another.

* Variations:

A: The app shows (using our analytics) the amount of users the data you sourced has helped. There is a leaderboard showing the most helpful users which resets on timed intervals, and the app tells you your ranking every time you submit parking data.

B: The app does not show any information relating to the amount of users you helped / your helpfulness ranking.
