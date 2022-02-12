

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

export function profileLayout(props){
    const [user, showUser] = useState(true)
    const [form, showForm] = useState(false);
    const [dashboard, showDashBoard] = useState(false)

    function buttonPressed(text) {
        
    }

    return (
        <>
        <Layout title="Profile">
        <div>
          <Toolbar>
            <Divider>
              <List>
                {["User Profile", "Edit Profile", "Your Garden"].map(
                  (text, index) => (
                    <ListItem
                      className="bg-black"
                      button
                      key={text}
                      onClick={buttonPressed(text)}
                    >
                      <ListItemText
                        className="text-green-800 text-xl"
                        primary={text}
                      />
                    </ListItem>
                  )
                )}
              </List>
            </Divider>
          </Toolbar>

          <div id="main_content">
            {children}
          </div>
        </div>
      </Layout>
    </>
    )
}