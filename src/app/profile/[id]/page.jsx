function UserProfile({ params }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      profile page {params.id}
    </div>
  );
}

export default UserProfile;
