import React, { useState, useContext, useEffect } from 'react';
import { TextField, InputAdornment, Button, Menu, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ChallengeContext } from "../Context/challengeProvider";

function HomeD() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [submenuAnchorEl, setSubmenuAnchorEl] = useState(null);
  const [submenuAnchorEl2, setSubmenuAnchorEl2] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const { challenges, setFilteredChallenges } = useContext(ChallengeContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSubmenuAnchorEl(null);
    setSubmenuAnchorEl2(null);
  };

  const handleSubmenuClick = (event) => {
    setSubmenuAnchorEl(event.currentTarget);
  };

  const handleSubmenuClick2 = (event) => {
    setSubmenuAnchorEl2(event.currentTarget);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
    handleClose();
  };

  const handleLevelClick = (level) => {
    setSelectedLevel(level);
    handleClose();
  };

  // Use useEffect to update filteredChallenges in context whenever filters change
  useEffect(() => {
    const filteredChallenges = challenges
      .filter(challenge => 
        challenge.challengeName.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .filter(challenge => 
        (selectedStatus === '' || challenge.status === selectedStatus) &&
        (selectedLevel === '' || challenge.level === selectedLevel)
      );
    setFilteredChallenges(filteredChallenges);
  }, [searchQuery, selectedStatus, selectedLevel, challenges, setFilteredChallenges]);

  return (
    <div className="w-full max-w-[1442px] h-[184px] bg-[#003145] flex justify-center overflow-x-hidden">
      <div className="w-full max-w-[900px] flex items-center">
        <TextField
          placeholder="Search by name..."
          variant="outlined"
          className='bg-white rounded-lg'
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          style={{ width: "80%" }}
          onChange={handleSearchChange}
        />
        <Button
          variant="outlined"
          onClick={handleClick}
          style={{ marginLeft: '16px', height: '50px' , backgroundColor: 'white'}}
          className='bg-white rounded-lg'
        >
          Filter
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleSubmenuClick}>Status</MenuItem>
          <Menu
            anchorEl={submenuAnchorEl}
            open={Boolean(submenuAnchorEl)}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          >
            <MenuItem onClick={() => handleStatusClick('')}>All</MenuItem>
            <MenuItem onClick={() => handleStatusClick('Active')}>Active</MenuItem>
            <MenuItem onClick={() => handleStatusClick('Upcoming')}>Upcoming</MenuItem>
            <MenuItem onClick={() => handleStatusClick('Past')}>Past</MenuItem>
          </Menu>
          <MenuItem onClick={handleSubmenuClick2}>Level</MenuItem>
          <Menu
            anchorEl={submenuAnchorEl2}
            open={Boolean(submenuAnchorEl2)}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          >
            <MenuItem onClick={() => handleLevelClick('')}>All</MenuItem>
            <MenuItem onClick={() => handleLevelClick('Easy')}>Easy</MenuItem>
            <MenuItem onClick={() => handleLevelClick('Medium')}>Medium</MenuItem>
            <MenuItem onClick={() => handleLevelClick('Hard')}>Hard</MenuItem>
          </Menu>
        </Menu>
      </div>
    </div>
  );
}

export default HomeD;
