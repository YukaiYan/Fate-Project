## TODO list
First of all, thanks you for your commitment, well done.

This is for reference only, will be updated on a weekly basis

#### 1. Update news
   Now, user responses will be recorded in userResponseData folder. But please be aware of the following:
   * Data will only be recorded after user enters their ID and hits "submission" button at the last page.
   * For security concerns, only valid data (generated by our website) will be recorded
   * Duplicate IDs will not be checked (too expensive)
   * Files are in csv format and can be expensive to move around.
   
   The buttons and input box will also be disabled after the user submits their ID.
   
#### 2. TODO: Online database, publish
   Publish the website and more pilot testing (for examining how data is saved)
   
#### 3. Potential Bugs
   In demographics.html, its input will not be cleared if the website is visited second time (without
   restarting the server). For example, The userInfo will be the following:
    
    UserInfo = ['age1','gender1','education_level1','ip_address1', 'mturk-id1','age2','gender2','education_level2','ip_address2', 'mturk-id2']
   
   Instead of:
    
    UserInfo = ['age2','gender2','education_level2','ip_address2', 'mturk-id2']

   Since the first one is not a proper input, it will not be written into the Respondent.csv file. So far,
   the only way to fix this is to restart the server, and it might lead to an issue if the project is published
   online.
   
#### 4. Data race, Concurrency, Security Concerns
   problems related to read/write data, general software development
   
   
   