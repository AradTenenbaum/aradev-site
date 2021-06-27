import React from 'react';
import { Drawer } from "@material-ui/core";


function MyDrawer({isOpenDrawer, setIsOpenDrawer, buttons}) {
    

    return (
        <Drawer color="inherit" anchor={'top'} open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
        {buttons}
        </Drawer>
    );
}

export default MyDrawer;
