/**
 * @format
 */

import 'react-native';
import React from 'react';
import '@testing-library/jest-dom'
import { render, waitFor } from '@testing-library/react-native';
import UserProfile from '../components/UserProfile';

it('User Profile Should Render Provided Profile Details', () => {
        const userProfile = { profile_image: "url", display_name: "Jon", reputation: "100" }
        const screen = render(<UserProfile user={userProfile} />);

        const displayNameView = screen.getByTestId("displayName");
        const reputationView = screen.getByTestId("reputation");
        const profileImageView = screen.getByTestId("profileImage");


        expect(displayNameView).toBeTruthy()
        expect(reputationView).toBeTruthy()
        expect(profileImageView).toBeTruthy()

        waitFor(() => expect(getByText(userProfile.display_name)).toBeInTheDocument());
        waitFor(() => expect(getByText(userProfile.reputation)).toBeInTheDocument());
        waitFor(() => expect(profileImageView.props.source.uri).toBe(userProfile.profile_image));
});
