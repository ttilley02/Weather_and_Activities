WEATHER ACTIVITIES API HACK Rev1 3/7/2020

----Objective----
To access multiple API and assist the user in finding out/suggesting which activities they can do given the weather


----Process----
The app first gets the user's location via geolocation or zipcode(pending).  The app then uses that information to fetch weather statistics(forecast) on
the national weather service API and reports back to the user.

Upon fetching the information and displaying it to the user, the app compares the current forecast pulled with ideal temps for activities in our database.
It then suggests activities based on what is deemed as ideal weather.

The user then can click on each activity to find out more information on said activity and to find related items nearby.

Tim Tilley
Christopher Mojekwu