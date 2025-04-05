import React from "react";

import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="conatainer mx-auto my-32">
            {children}
        </div>
    );

}

export default MainLayout;