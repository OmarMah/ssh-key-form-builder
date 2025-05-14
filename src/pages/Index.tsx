
import SshKeyForm from "@/components/SshKeyForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">SSH Key Manager</h1>
        <p className="text-gray-600">
          Add your SSH key to access our secure services
        </p>
      </div>
      
      <SshKeyForm />
      
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>
          Your SSH keys are securely stored and only used for authentication purposes.
        </p>
      </div>
    </div>
  );
};

export default Index;
