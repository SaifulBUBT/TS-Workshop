type ID = number | string;

type Admin = {
  id: ID;
  role: "admin";
  fullControl: boolean;
};

type Manager = {
  id: ID;
  role: "manager";
};

type User = Admin | Manager;

function userInfo(user: User) {
  if (user.role === "admin") {
    console.log(`I have full control ${user.fullControl}`);
  }
}

userInfo({ id: 1, role: "admin", fullControl: true });
userInfo({ id: 2, role: "manager" });

///////////
function formatValue(value: number | string): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  return value.toFixed(2);
}

formatValue("Saiful");
formatValue(345.9086);

//////////

type ErrorResponse = {
  error: true;
  message: string;
};

type SuccessResponse = {
  error: false;
  data: string;
};

type ApiResponse = ErrorResponse | SuccessResponse;

function handleResponse(response: ApiResponse) {
  if (response.error == true) {
    console.log(response.message);
  } else {
    console.log(response.data);
  }
}
