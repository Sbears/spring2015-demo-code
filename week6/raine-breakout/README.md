# Scheduling App
An app that allows people to schedule appointments with individual members of the Zimbabwe National Roller Derby Team.

- Christina "Krusher"
- Al'ia "Blade"
- Rachel "Lazer"

The home page will display all of the team members. Clicking on a team member will take you to their schedule.

On the schedule page, you can view each of the open slots (1 hr) for the given team member.

You can click on an open slot, to schedule an appointment.

## Infrastructure

* query parameters are key-value pairs that are embedded in the url
	?property1=value1&property2=value2

	// access the value of a query parameter on the server for a specific request
	req.query.property1 === 'value1'

- Home
	/
- View Schedule
	/schedule/crusher
	/schedule/blade
	/schedule/lazer
- Book an appointment
	/book/crusher/5/5/15
	/book/crusher/5-5-15/5
	/book/crusher?date=5/5/15&time=5

