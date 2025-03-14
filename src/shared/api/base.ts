import { TExplicitAny } from "@/shared/lib";

const BASE_API = {
  save(data: TExplicitAny) {
    alert(JSON.stringify(data));
  },
};

export { BASE_API };
