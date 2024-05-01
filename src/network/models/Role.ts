import { IBaseEntity } from "./core/IBaseEntity";

interface Role extends IBaseEntity {
    name: string,
    normalizedName: string,
}

export default Role