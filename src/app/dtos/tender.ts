import { LanguageEntity } from './languageentity';

export class Tender {
  constructor(
    public id: string,
    public cpvs: string[],
    public languageentities: LanguageEntity[],
    public original_lang: string,
    public original_lang_entity: LanguageEntity
    ) {
  }
}
