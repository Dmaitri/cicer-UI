export const selectProject = (project) => ({
    type: 'SELECT_PROJECT',
    selectedProject:project,
});

export const selectProjectId = (id) => ({
    type: 'SELECT_PROJECT_ID',
    selectedProjectId:id,
});
export const selectUser = (user) => ({
    type: 'SELECT_USER',
    selectedUser:user,
});
export const selectUserId = (userId) => ({
    type: 'SELECT_USER_ID',
    selectedUserId:userId,
})
