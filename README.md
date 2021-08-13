# Zebra_Automation
This is my take home test for the Zebra.

These tests require installing the latest version of Chrome. You will need to install npm using the following command:
npm install 

Then to run the tests, use the command:
npm start

To start this project, I used Javascript, Selenium, and Nightwatch. I chose Nightwatch because it has everything needed for testing. It can support cloud testing, has easy to use syntax, and can perform end-to-end testing. Nightwatch can also be used to test the API, which would be a good future use. It also does not require a lot of extra plugins and already has a test runner, assertion library, and can integrate with the page object model.

For verifications, I focused on the headlines and subheadlines. Some were a little trickier, so I moved on to get started on the user flow. 

I tested the zip code field using positive and negative testing. If I had more time, I would have liked to make a function to randomly input the zip code to test the error message and correct pathway rather than inputting a specific string. 

On the first question of the “start” step of the user flow, I wanted to test user input of yes and no. The answer triggers different questions next and I wanted to make sure the expected question showed up. I focused on the flow if the user does have insurance because I think more people would currently have insurance. I would have liked to also verify the green information box that pops up if the user selects certain choices on the “Do you own or rent your home?” question. I ran into issues when trying to pull the id in some places and had to get a little creative. But there were other tests that I did not have time to look at again, so I commented out those tests that are still failing. I was originally thinking I would complete automating the entire user flow, but I realize that would take more time. 

If I had more time, I would have restructured my code using the page object model. I was focused on trying to get as many tests as I could completed and didn’t refactor it for reusability.
