import React, {useEffect, useState} from "react";
import { Navigate} from "react-router-dom";
import supabase from "../helper/supabaseClient";


     




/*Source: https://github.com/arpanneupane19/react-supabase-auth */
function Wrapper({children}) {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const getSession = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession();

            setAuthenticated(!!session)
            setLoading(false)

            }
            getSession();
        }, []);

        if (loading) {
            return <div>Page Loading...</div>
        } else {
            if (authenticated) {
                return<>{children}</>;
            }
            return <Navigate to="/" />
        }
    }


    export default Wrapper
