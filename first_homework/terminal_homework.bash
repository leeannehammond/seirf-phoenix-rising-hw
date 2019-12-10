Skip to content
Enterprise
Search or jump to…

Pull requests
Issues
Explore
@leeannehammondSign out
1
230ira/SEIR-FLEX-123 Private
forked from sei-flex/SEIR-FLEX-ADA-INSTRUCTOR
 Code Issues 0 Pull requests 0 Projects 0 Wiki Insights
SEIR-FLEX-123/unit_1/w01d2/homework/first_bash_instructions.bash
790ef2c on Aug 29
 misteroh updating up to week 4 homework
   
72 lines (40 sloc)  2.17 KB
# Copy this text into your `.bash` homework file. Copy and paste the code you successfully used into terminal below each prompt

# Open the **Terminal app**

# Create a new directory on your desktop called `galaxy_far_far_away`and enter it
mkdir 'galaxy_far_far_away'
# Create a directory called `death_star`
mkdir 'death_star'
# and make the following files inside of it:
# darth_vader.txt    
//touch darth_vader.txt
# princess_leia.txt   
// touch princess_leia.txt
# storm_trooper.txt  
// touch storm_trooper.txt

# In `galaxy_far_far_away`, make a directory named `tatooine`
//mkdir 'tatooine'
# and create the following files in it:
# luke.txt  
// touch luke.txt
# ben_kenobi.txt 
//touch ben_kenobi.txt

# Inside of `tatooine` make a directory called `millenium_falcon`
// mkdir 'millenium_falcon'
# and in it create:
# han_solo.txt  
// touch han_solo.txt
# chewbaca.txt  
// touch chewbaca.txt

# Rename `ben_kenobi.txt` to `obi_wan.txt
// mkdir 'obi_wan.txt' 
// mv ben_kenobi.txt obi_wan.txt
# Copy `storm_trooper.txt` from `death_star` to `tatooine`
cp -r storm_trooper.txt death_star
mv storm_trooper.txt tatooine
# Move `luke.txt` and `obi_wan.txt` to the `millenium_falcon`
mv luke.txt millenium_falcon
mv obi_wan.txt millenium_falcon
# Move `millenium_falcon` out of `tatooine` and into `galaxy_far_far_away`
cp -r millenium_falcon tatooine
mv millenium_falcon galaxy_far_far_away
# Move `millenium_falcon` into `death_star`
mv millenium_falcon death_star
# Move `princess_leia.txt` into the `millenium_falcon`
mv princess_leia.txt millenium_falcon
# Delete `obi_wan.txt`
rm obi_wan.txt

# In `galaxy_far_far_away`, make a directory called `yavin_4`
cd galaxy_far_far_away
mkdir 'yavin_4'
# Move the `millenium_falcon` out of the `death_star` and into `yavin_4`
cp millenium_falcon death_star
mv millenium_falcon yavin_4
# Make a directory in `yavin_4` called `x_wing`
cd yavin_4
mkdir x_wing
# Move `princess_leia.txt` to `yavin_4` and `luke.txt` to `x_wing`
mv princess_leia.txt yavin_4
mv luke.txt x_wing
# Move the `millenium_falcon` and `x_wing` out of `yavin_4` and into `galaxy_far_far_away`
cp -r millenium_falcon yavin_4
mv millenium_falcon galaxy_far_far_away
cp -r x_wing yavin_4
mv x_wing galaxy_far_far_away
# In `death_star`, create directories for `tie_fighter_1`, `tie_fighter_2` and `tie_fighter_3`
cd death_star
mkdir 'tie_fighter_1'
mkdir 'tie_fighter_2'
mkdir 'tie_fighter_3'
# Move `darth_vader.txt` into `tie_fighter_1`
mv darth_vader.txt tie_fighter_1
# Make a copy of `storm_trooper.txt` in both `tie_fighter_2` and `tie_fighter_3`
cp -r storm_trooper.txt tie_fighter_2
cp - storm_trooper.txt tie_fighter_3
# Move all of the `tie_fighters` out of the `death_star` and into `galaxy_far_far_away`
mv tie_fighters death_star
mv tie_fighters galaxy_far_far_away
# Be careful with this command - cannot undo!

# Make sure you delete the right thing, or you could accidentally delete the contents of your computer (it has happened).

# This command will typically not ask you if you really want to delete. It will just delete so doublecheck you are deleting exactly what you mean to delete

# Remove `tie_fighters` 2 and 3.
rm -r tie_fighters_2
rm -r tie_fighters_3
# Touch a file in "**x_wing**" called "**the_force.txt**".
cd x_wing
touch '**the_force.txt**'
# Destroy the "**death_star**" and anyone inside of it.
rm -r '**death_star**'
# Return "**x_wing**" and the "**millenium_falcon**" to "**yavin_4**".
mv x_wing yavin_4
mv millenium_falcon yavin_4
# Celebrate!
© 2019 GitHub, Inc.
Help
Support
API
Training
Blog
About
GitHub Enterprise Server 2.16.9
Press h to open a hovercard with more details.