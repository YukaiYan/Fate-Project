# TODO list
First of all, thanks you for your commitment, well done.

This is for reference only, will be updated on a weekly basis

### 1. Update news
   Now, All the information will be recorded in db.sqlite3, but please be aware of the following:
   * Please make sure that all the elements in the requirement.txt are downloaded first.
   * Data will only be recorded after user enters their ID and hits "submission" button at the last page.
   * For security concerns, only valid data (generated by our website) will be recorded.Invalid answers will 
     not be recorded and an error message will be displayed on the terminal.
   * Duplicate IDs will only be checked in UserInfo table. When duplicate ID is inserted, 
     it will update the old elements, instead of creating a new instance.
   
   The buttons and input box will also be disabled after the user submits their ID.

### 2. About models.py
   If you want to update tables in model.py (like attributes, limits, checking conditions), 
   please follow these steps:
   * WARNING: the following commands will also delete saved data in the original database
   * Update models.py as needed
   * In polls/migrations folder, delete 0002_auto_DATEINFO.py
   * Run the following command to delete old tables:
   
    py manage.py migrate polls zero
   
   * Run the following command to create new tables:
   
    py manage.py makemigrations
    py manage.py migrate
   
   * This will delete old table and create a new one based on model.py
   * After checking all is working, don't forget to commit 0002_auto_DATEINFO.py and 
     db.sqlite3 so others can use your code directly.
   
### 3. Check saved data in the database
   If you want to check saved data during testing, please follow these steps:
   * Run the following command to open a python shell
    
    py manage.py shell
    
   * In the python shell type:
   
    from polls.models import *
    
   * To check specific table (for example, UserInfo) run:
   
    UserInfo.objects.all()
   
   * To delete elements in the table, run:
   
    UserInfo.objects.filter(mturk_id=test).delete()  # delete certain elements
    UserInfo.objects.all().delete()                  # clear table
   
### 4. TODO: Online database, publish
   Publish the website and more pilot testing (for examining how data is saved)
   
### 5. Data race, Concurrency, Security Concerns
   problems related to read/write data, general software development
   
   
   