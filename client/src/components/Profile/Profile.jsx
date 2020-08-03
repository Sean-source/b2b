import React from 'react';
import "./style.css";

const Profile = () => {

    return (
        <>
            <div class="body">
                <div class="profile">
                    <div class="firstside">
                        <div class="picture"> </div>
                        <div class="button1">
                            <button type="button" class="btn btn-primary">Favorite Drills</button>
                        </div>
                        <div class="button2">
                            <button type="button" class="btn btn-primary">Request a Lesson Here</button>
                        </div>
                    </div>

                    <div class="secondside">
                        <div class="description">

                        </div>

                    </div>

                </div>
            </div>
        </>
    );


}

export default Profile;