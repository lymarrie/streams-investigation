export interface EntityReference {
	entityId: string,
	name: string,
}

export interface Ce_company {
	name: string,
	c_location?: EntityReference[],
	id: string,
}
