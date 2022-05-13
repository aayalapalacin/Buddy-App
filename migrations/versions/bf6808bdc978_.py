"""empty message

Revision ID: bf6808bdc978
Revises: 068530fd11f3
Create Date: 2022-05-13 16:45:10.936847

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'bf6808bdc978'
down_revision = '068530fd11f3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('category', sa.Column('user_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'category', 'user', ['user_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'category', type_='foreignkey')
    op.drop_column('category', 'user_id')
    # ### end Alembic commands ###