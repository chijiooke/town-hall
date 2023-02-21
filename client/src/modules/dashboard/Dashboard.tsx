import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { DirectInbox, MessageCircle } from "iconsax-react";
import React, { Children, FC } from "react";

export const Dashboard: FC<{ Children?: any }> = ({ Children }) => {
  const drawerWidth = 300;
  return (
    <>
      <Drawer
        sx={{
            
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",backgroundColor:"common.black",
            color:"common.white",borderRight:"0.5px solid #333",
            
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <DirectInbox /> : <MessageCircle />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};
