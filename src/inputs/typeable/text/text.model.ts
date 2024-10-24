import type { TypeableProps, TypeableState } from '~/models/inputs/typeable/typeable.model';
import type { CSS, Dynamic, Variant } from '~/models';

export interface TextProps extends TypeableProps {
    variant?: Dynamic<Variant>;
    disabled?: boolean;
}

export interface TextState extends TypeableState {
    classes: { base: string };
    styles: { container: CSS };
}