import React from 'react';
import '../style/TopHeader.css'

function TopHeader(props) {
    return (
      <div className="top-header">
          <div className="menu-item">
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0.5H1.99C0.88 0.5 0.00999999 1.39 0.00999999 2.5L0 16.5C0 17.6 0.88 18.5 1.99 18.5H16C17.1 18.5 18 17.6 18 16.5V2.5C18 1.39 17.1 0.5 16 0.5ZM16 12.5H12C12 14.16 10.65 15.5 9 15.5C7.35 15.5 6 14.16 6 12.5H1.99V2.5H16V12.5Z"/>
          </svg>
              <span>Backlog</span>
          </div>
          <div className="menu-item">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.333344 10.5H8.33334V0.5H0.333344V10.5ZM0.333344 18.5H8.33334V12.5H0.333344V18.5ZM10.3333 18.5H18.3333V8.5H10.3333V18.5ZM10.3333 0.5V6.5H18.3333V0.5H10.3333Z" />
              </svg>
              <span>Board</span>
          </div>
          <div className="menu-item">
              <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6667 8.5H19.6667V10H12.6667V8.5ZM12.6667 6H19.6667V7.5H12.6667V6ZM12.6667 11H19.6667V12.5H12.6667V11ZM20.6667 0.5H2.66669C1.56669 0.5 0.666687 1.4 0.666687 2.5V15.5C0.666687 16.6 1.56669 17.5 2.66669 17.5H20.6667C21.7667 17.5 22.6667 16.6 22.6667 15.5V2.5C22.6667 1.4 21.7667 0.5 20.6667 0.5ZM20.6667 15.5H11.6667V2.5H20.6667V15.5Z"/>
              </svg>
              <span>Feed</span>
          </div>
          <div className="menu-item">
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 0H2.00003C0.90003 0 3.05176e-05 0.9 3.05176e-05 2V18C3.05176e-05 19.1 0.90003 20 2.00003 20H14C15.1 20 16 19.1 16 18V2C16 0.9 15.1 0 14 0ZM2.00003 2H7.00003V10L4.50003 8.5L2.00003 10V2Z" />
              </svg>
              <span>Reports</span>
          </div>
      </div>
    );
}

export default TopHeader;